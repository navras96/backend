<?php

class indexController extends Controller {

	public function index(){
		$message = file_get_contents(BASE_DIR.'/assets/main.html');
		$this->setResponce($message);
	}
}