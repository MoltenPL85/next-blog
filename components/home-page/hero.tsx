import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
