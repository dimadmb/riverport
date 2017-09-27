<?php

namespace BaseBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


use Symfony\Component\Form\Extension\Core\Type\FormType;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class FeedBackController extends Controller
{
	 /**
	 * @Template("BaseBundle:Page:contacts.html.twig")
     */
    public function indexAction(Request $request)
    {
		$request =  Request::createFromGlobals();
		
		
		$form = $this->get('form.factory')->createNamedBuilder(null,FormType::class,null, ['csrf_protection' => false,'validation_groups' => false])
		
		->add('name',TextType::class)
		->add('email',EmailType::class)
		->add('body',TextareaType::class)
		
		->add('submit', SubmitType::class,array('attr'=>[ 'class'=> 'ui-btn ui-btn_default']))
		//->setMethod('GET')
		->getForm()		
		
		;


		$form->handleRequest($request);	
		
		$dump = [];
		
		$result = false;
		if ($form->isSubmitted() && $form->isValid()) 
		{
			$data = $form->getData();
			
			
			$email = $data['email'];
			$name = $data['name'];
			$mailer = $this->get('mailer');
			$message = \Swift_Message::newInstance()
				->setSubject('Обратная связь ПАССАЖИРСКИЙ ПОРТ')

				//->setFrom([$email=>$name])
				->setFrom(['nobody@vodohod.com'=>'ПАССАЖИРСКИЙ ПОРТ'])
				//->setSender(['nobody@vodohod.com'=>'ПАССАЖИРСКИЙ ПОРТ SENDER'])
				
				->setReplyTo([$email=>$name])
				
				->setTo(['dimadmb@mail.ru'])
				->setBcc(['dkochetkov@vodohod.ru'])
				

				->setBody('<pre>'.print_r($data,1).'</pre>', 'text/html')
				

			;
			$dump = $message;
			
			$mailer->send($message);	

			$result = true;		

		}			
		
		
		return  ["form"=> $form->createView(), 'result'=>$result];
	}	
}
