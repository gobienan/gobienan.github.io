<?php
  session_start();
  require 'connect.php';
  if (isset($_POST['mail']) && !empty($_POST['mail']) && isset($_POST['password']) && !empty($_POST['password'])) {
      $mail = mysqli_real_escape_string($conn, $_POST['mail']);
      $pw = mysqli_real_escape_string($conn, $_POST['password']);
      register($mail, $pw, $conn);
      sendMail($mail, $conn);
  }

  function register($mail, $password, $conn)
  {
      $hash = password_hash($password, PASSWORD_DEFAULT);
      //$hash = password_hash($password, PASSWORD_BCRYPT);
      $query = mysqli_query($conn, "SELECT * FROM users WHERE mail='".$mail."'");

      if (mysqli_num_rows($query) > 0) {
          die('Email already exists');
      } else {
          $token = generateToken(20);
          $query = "INSERT INTO users (id,mail,password, active,pro,subscription_date,token) VALUES (NULL,'$mail','$hash','0','1',NOW(),'$token');";
          $result = mysqli_query($conn, $query);
      }
  }

  function sendMail($mail, $conn)
  {
      $result = mysqli_query($conn, "SELECT token FROM users WHERE mail='".$mail."'");
      $row = mysqli_fetch_assoc($result);
      $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]?token=".$row['token'];
      $toEmail = $mail;
      $subject = 'Welcome! Please activate your bookmarko account';
      $content = "  <body style='margin: 0;width: 100%;height: 100%;font-family: &quot;Raleway&quot;;background-color: #2b2c4f;padding: 10px;box-sizing: border-box;'>
          <div class='content' style='position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);background-color: white;padding: 50px;min-width: 500px;display: flex;flex-direction: column;justify-content: center;align-items: center;'>
            <div class='headline'>
              <h1 id='activation' style='color: rgba(0, 0, 0, 0.7);line-height: normal;'>Thanks for joining Bookmarko :)</h1>
            </div>
            <div class='subline'>
              <h3 style='text-align:center;color: rgba(0, 0, 0, 0.7);font-weight: 300;'>You will need to activate your account before you can login. Please follow the link below to activate your account. </h3>
              <a style='text-align:center'; href='".$actual_link."'>".$actual_link.'</a>
            </div>
          </div>
        </body>';
      //$content = "Click this link to activate your account. <a href='".$actual_link."'>".$actual_link.'</a>';
      $headers = 'MIME-Version: 1.0'."\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
      $headers .= "From: admin@bookmarko.me\r\n";
      mail($toEmail, $subject, $content, $headers);
      $subject = $mail.' hat sich auf der seite registriert';
      $content = '';
      mail('admin@bookmarko.me', $subject, $content, $headers);
      echo true;
      unset($_POST);
  }
  function generateToken($length)
  {
      return bin2hex(random_bytes($length));
  }
  if (!empty($_GET['token'])) {
      $token = mysqli_real_escape_string($conn, $_GET['token']);
      $query = "SELECT * FROM users
                WHERE token='".$token."'";
      $result = mysqli_query($conn, $query);
      if (mysqli_num_rows($result) == 0) {
          $message = 'Something went wrong with your account activation.';
      } else {
          $row = mysqli_fetch_assoc($result);
          $user =  $row["mail"];
          $query = "UPDATE users
                  SET active =1
                  WHERE token='".$token."'";
          $result = mysqli_query($conn, $query);
          if (!file_exists('../uploads/'.$user)) {
              mkdir('../uploads/'.$user, 0777, true);
          }
          $message = 'Your account is activated. ';
          $message .= "<a href='http://www.bookmarko.me/'>Login</a>";
      }
      $content = "
          <div class='content'>
            <div class='headline'>
              <h1>Bookmarko.me</h1>
            </div>
            <div class='subline'>
              <h3>$message</h3>
            </div>
          </div>
        ";
      $html = "<!DOCTYPE html>
        <html>
          <head>
            <title>Bookmarko - Register</title>
            <meta charset='UTF-8'>
            <meta content='width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no' name='viewport'>
            <!--link(rel='stylesheet' href='./css/marka.min.css')-->
            <link rel='stylesheet' href='../css/style_register.css'>
            <!--link(rel='stylesheet',  media='(max-width: 1600px)', href='./css/style_medium.css')-->
            <!--link(rel='stylesheet',  media='(max-width: 1200px)', href='./css/style_small.css')-->
            <link href='https://fonts.googleapis.com/css?family=Raleway:200,400,700' rel='stylesheet' type='text/css'>
            <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet'>
            <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>
          </head>
          <body>
            <div class='wrapper'>$content</div>
          </body>
          <script src='//code.jquery.com/jquery-1.11.3.js'></script>
          <script src='../js/register.js'></script>
        </html>";
      echo $html;
  }
