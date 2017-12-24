<?php

class indexController extends Controller {

	public function index(){
		$message = file_get_contents(BASE_DIR.'/main.php');
		$this->setResponce($message);
	}
}