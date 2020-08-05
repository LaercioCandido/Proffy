import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars2.githubusercontent.com/u/55990442?s=460&u=d5ae14f88f12317130cec1a4829d1566f24be396&v=4" alt="Laercio Candido"/>
				<div>
					<strong>Laercio Candido</strong>
					<span>Matemática</span>
				</div>
			</header>
			<p>
				Licenciatura e Bacharelado em Matemática pela UERJ
				<br/><br/>
				Experiência de mais de 15 anos no Ensino Básico e Superior.
			</p>
			<footer>
				<p>
					Hora/aula
					<strong>R$ 90,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem;
