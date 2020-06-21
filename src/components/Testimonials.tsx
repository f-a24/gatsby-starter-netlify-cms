import * as React from 'react';
import { v4 } from 'uuid';

type PropsType = { testimonials: any };

const Testimonials: React.FC<PropsType> = ({ testimonials }: any) => (
  <div>
    {testimonials.map((testimonial: any) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> –{testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

export default Testimonials;
