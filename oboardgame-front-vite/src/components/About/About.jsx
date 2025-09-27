import React from 'react';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

const About = () => {
  return (
    <div className="grid">
      <div className="col-12 md:col-8 md:col-offset-2">
        <Card title="À propos d'O'BoardGame">
          <p className="text-lg line-height-3">
            O'BoardGame est une application dédiée aux passionnés de jeux de société. 
            Notre objectif est de vous aider à gérer votre collection de jeux, à découvrir 
            de nouveaux titres et à partager votre passion avec d'autres joueurs.
          </p>

          <Divider />

          <h3>Fonctionnalités principales</h3>
          <ul className="list-none p-0 m-0">
            <li className="flex align-items-center py-2">
              <i className="pi pi-check-circle text-primary mr-2"></i>
              <span>Gérez votre collection personnelle de jeux</span>
            </li>
            <li className="flex align-items-center py-2">
              <i className="pi pi-check-circle text-primary mr-2"></i>
              <span>Notez et commentez les jeux que vous avez essayés</span>
            </li>
            <li className="flex align-items-center py-2">
              <i className="pi pi-check-circle text-primary mr-2"></i>
              <span>Découvrez de nouveaux jeux grâce à nos recommandations</span>
            </li>
            <li className="flex align-items-center py-2">
              <i className="pi pi-check-circle text-primary mr-2"></i>
              <span>Recherchez des jeux selon vos critères</span>
            </li>
          </ul>

          <Divider />

          <h3>L'équipe</h3>
          <p>
            O'BoardGame a été créé par une équipe de passionnés de jeux de société 
            qui souhaitent partager leur passion avec le plus grand nombre.
          </p>

          <Divider />

          <h3>Contact</h3>
          <p>
            Vous avez des questions ou des suggestions ? N'hésitez pas à nous contacter à l'adresse :
            <br />
            <a href="mailto:contact@oboardgame.com" className="text-primary hover:underline">
              contact@oboardgame.com
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
