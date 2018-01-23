<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NoteProject</title>
    <link rel="stylesheet" href="css/materialize.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>

    <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">NoteProject</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Menu 1</a></li>
            <li><a href="#">Menu 3</a></li>
            <li><a href="#">Menu 4</a></li>
          </ul>
        </div>
      </nav>

    <!-- Page Layout here -->
    <div class="row">

        <div class="col s3">
            <h3>Left</h3>
        </div>
  
        <div class="col s9">
            <div class="row">
                <div class="col s12">
                    <main>
                    <div id="loader">Chargement</div>
                    <!-- Form -->
                    <div class="devider"></div>
                    <div class="section">
                        <input type="text" placeholder="Title">
                        <textarea class="materialize-textarea" cols="30" rows="10" placeholder="Content"></textarea>
                    </div>
                    <button class="btn waves-effect waves-light">Submit
                        <i class="material-icons right">send</i>
                    </button>
                    </main>
                </div>
            </div>
        </div>
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/app.js"></script>
</body>
</html>