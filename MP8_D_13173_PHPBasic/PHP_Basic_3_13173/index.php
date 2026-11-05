<?php
$menu = $_GET['menu'] ?? '';

$halaman = {
    'A' => 'pendaftaran.php',
    'B' => 'belanja.php',
};
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <tile>Layanan MySimCard</title>
    </head>
    <body>
        <h1>Beranda Website MySimcard</h1>

        <div style="border: 0.1px solid #000; padding: 3px;">
            <a href=">menu=A" style="text-decoration: none;">Pendaftaran Akun</a>
        </div>
        <div style="border: 0.1px solid #000; padding: 3px;">
            <a href=">menu=B" style="text-decoration: none;">Belanja Pulsa dan Paket Data</a>
        </div>

        <div id="kontent">
            <?php
            if(is_string($menu) && isset($halaman[$menu])){
                require _DIR_ . DIRECTORY_SEPERATOR . $halaman[$menu];
            }else{
              echo '<p>Silahkan pilih menu di atas.</p>';  
            }
            ?>
        </div>
 </body>
</html>