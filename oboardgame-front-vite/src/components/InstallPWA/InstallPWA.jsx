import React, { useEffect, useRef } from 'react';

const InstallPWA = () => {
  const deployedPrompt = useRef(null);

  const handleInstallClick = async () => {
    // Afficher l'invite d'installation
    if (deployedPrompt.current) {
      try {
        // Afficher l'invite d'installation
        deployedPrompt.current.prompt();
        
        // Attendre que l'utilisateur réponde à l'invite
        const { outcome } = await deployedPrompt.current.userChoice;
        
        // Réinitialiser la variable deployedPrompt car elle ne peut être utilisée qu'une seule fois
        deployedPrompt.current = null;
        
        if (outcome === 'accepted') {
          console.log('L\'utilisateur a accepté l\'installation PWA');
        } else {
          console.log('L\'utilisateur a refusé l\'installation PWA');
        }
      } catch (error) {
        console.error('Erreur lors de l\'installation de l\'application:', error);
      }
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Empêcher la mini-infobar d'apparaître sur mobile
      e.preventDefault();
      // Stocker l'événement pour qu'il puisse être déclenché plus tard
      deployedPrompt.current = e;
      
      // Afficher le bouton d'installation
      console.log('L\'application peut être installée');
      
      // Pour l'instant, on ne fait rien d'autre que logger dans la console
      // Vous pouvez ajouter ici une logique pour afficher un bouton d'installation personnalisé
    };

    // Écouter l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Ne rien afficher si l'application est déjà installée
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return null;
  }

  return null; // Ne rien afficher pour le moment
};

export default InstallPWA;
