<?php

function show_errors(): void
{
    if (isset($_SESSION['form_errors'])) {
        $errors = $_SESSION['form_errors'];

        foreach ($errors as $error) {
            echo '</br>' . '<span class="error">' . $error . '</span>';
        }

        unset($_SESSION['form_errors']);
    }
}

function email_sent(): void
{
    if (isset($_SESSION['email_sent'])) {
        $message = $_SESSION['email_sent'];

        echo '<span class="success">' . $message . '</span>';

        unset($_SESSION['email_sent']);

    } else if(isset($_SESSION['email_sent_error'])) {
        $message = $_SESSION['email_sent_error'];

        echo '<span class="error">' . $message . '</span>';

        unset($_SESSION['email_sent_error']);
    }
}