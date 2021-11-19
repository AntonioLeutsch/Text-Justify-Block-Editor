<?php

/**
 * Plugin Name: Text Justify
 * Plugin URI: https://github.com/antonioleutsch/text-justify-block-editor
 * Description: Easily add text justify to WordPress Block Editor.
 * Version: 1.0.0
 * Author: Antonio Leutsch
 * Author URI: https://antonio-leutsch.com
 * License: MIT
 * Requires PHP: 7.0
 * Tested up to: 5.8
 */

function text_justify_format_script_register()
{
    wp_register_script(
        'text-justify-format-js',
        plugins_url('build/index.js', __FILE__)
    );
}

add_action('init', 'text_justify_format_script_register');

function text_justify_format_enqueue_assets_editor()
{
    wp_enqueue_script('text-justify-format-js');
}

add_action('enqueue_block_editor_assets', 'text_justify_format_enqueue_assets_editor');

add_action('enqueue_block_assets', function () {
    wp_enqueue_style(
        'text-justify-format-css',
        plugins_url('build/index.css', __FILE__)
    );

}, 100);
