import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>Feedback app created to leave a product review</p>
        <p>Version 1.0</p>
        <p>
          <Link to='/'>Back Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
