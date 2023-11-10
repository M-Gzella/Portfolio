<?php

function is_input_empty($name, $email, $topic, $message):bool {
    if (!strlen($name) ||!strlen($email) || !strlen($topic) || !strlen($message)) {
        return TRUE;
    } else {
        return FALSE;
    }
}

function is_email_correct($email):bool {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return TRUE;
    } else {
        return FALSE;
    }
}