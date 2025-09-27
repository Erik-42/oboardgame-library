import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

const FeatureCard = ({ title, description, linkTo, icon, buttonLabel }) => (
  <div className="col-12 md:col-4">
    <Card title={title} className="h-full">
      <p className="mt-0 mb-4">
        {description}
      </p>
      <Link to={linkTo}>
        <Button label={buttonLabel} icon={icon} />
      </Link>
    </Card>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default FeatureCard;
