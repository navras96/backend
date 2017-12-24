<?php

class Menu
{
    private static $url = 'main.php?page=%s';
    private static $items = [1 => ['title' => 'Start', 'path' => 'assets/start.html'],
                             2 => ['title' => 'About', 'path' => 'assets/about.html'],
                             3 => ['title' => 'Top List', 'path' => 'assets/top_list.html']];
    private static function getLine($key, $active)
    {
        if ($active)
        {
            $active_line = '<li class="menu__item menu__item_active">%s</li>';
            return sprintf($active_line, self::$items[$key]['title']);
        }
        $line = '<li class="menu__item"><a href=%s>%s</a></li>';
        return sprintf($line, sprintf(self::$url, $key), self::$items[$key]['title']);
    }

    public static function renderMenu($active_menu = 1)
    {
        $result = '';
        foreach (self::$items as $key=>$page)
        {
            if ($active_menu == $key) { $result = $result . self::getLine($key, true); }
            else { $result = $result . self::getLine($key, false); }
        }
        return $result;
    }

    public static function getPage($page = 1)
    {
        return file_get_contents(self::$items[$page]['path']);
    }
}

