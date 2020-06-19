import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export default ({ gridItems }: any) => (
  <div className="columns is-multiline">
    {gridItems.map((item: any) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block'
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);
