<?php

/**
 * Checks if inputs are empty
 *
 * @param string $name
 *   Name from form input
 * @param string $email
 *   Email from form input
 * @param string $topic
 *   Topic of message from form input
 * @param string $message
 *   Message from form input
 *
 * @return bool
 *   Returns TRUE if one of the inputs is empty
 */
function is_input_empty(string $name, string $email, string $topic, string $message): bool {
    if (!strlen($name) || !strlen($email) || !strlen($topic) || !strlen($message)) {
        return TRUE;
    } else {
        return FALSE;
    }
}

/**
 * Checks if email syntax is correct
 *
 * @param string $email
 *   Email from form input
 *
 * @return bool
 *   Returns TRUE if email syntax is invalid
 */
function is_email_correct(string $email): bool {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return TRUE;
    } else {
        return FALSE;
    }
}