<?php
require "dynamic-options.php";

if(isset($_POST['submit'])){
    //! DEBUG PURPOSES
    print_r($_POST);
}

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bootstrap Example</title>
        <!-- Bootstrap CSS -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <form action="" method="post">
            <div class="container mt-5">
                <div class="row gy-4 row-kill">
                    <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                        <div class="form-group">
                            Click The Edit Button
                        </div>
                    </div>

                    <div class="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <div class="form-group">
                            <button class="btn general-button" onclick="dynamicEdit(this);">
                                    Edit ✏️
                            </button>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="form-group">
                            <div class="dynamic-edit" id="linkintext" data-value="Link To YouTube!">
                                <a href="www.youtube.com">Link To YouTube!</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="form-group">
                            <div class="dynamic-edit select" id="usernames" data-value="0">
                                N/A
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="form-group">
                            <div class="dynamic-edit number" id="numval">
                                37
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="form-group">
                            <div class="dynamic-edit select" id="buildings">
                                Building 1
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>

        <!-- Bootstrap JavaScript Bundle with Popper -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </body>
</html>