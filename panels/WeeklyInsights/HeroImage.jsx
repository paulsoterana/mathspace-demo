// @flow

import React, { Fragment, useState } from 'react';

import WistiaModal from 'components/WistiaModal';

import { urlBuilders } from 'utils/urls';
import sendCTAClickEvent from 'utils/analytics';

const OPEN_INSIGHTS_VIDEO = 'open-insights-video';

const HeroImage = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <Fragment>
      <div className="container">
        <div className="wrapper">
          {/* eslint-disable-next-line */}
          <img
            role="button"
            tabIndex="0"
            className="image"
            src={urlBuilders.imageUrl('weeklyInsights/insights-hero.svg')}
            alt=""
            data-event-label={OPEN_INSIGHTS_VIDEO}
            onClick={() => {
              sendCTAClickEvent(OPEN_INSIGHTS_VIDEO);
              setShowVideo(true);
            }}
          />
        </div>
      </div>
      {showVideo && (
        <WistiaModal videoId="2wsz45rtnh" onClose={() => setShowVideo(false)} />
      )}
      <style jsx>{`
        .container {
          text-align: center;
          line-height: 0;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzACKaRQAimkUBMqog8QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAqwSURBVHic7dZBDcAgAMBAQNNMYAL/LjYTTUiWOwV9dj77vAMAgMy6HQAA8DcGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIGCwAgZrAAAGIf1YkGior/U38AAAAASUVORK5CYII=');
          background-size: 100% 21.7%;
          background-repeat: no-repeat;
          background-position: bottom center;
        }
        .wrapper {
          max-width: 735px;
          margin: 0 auto;
        }
        .image {
          width: 100%;
          cursor: pointer;
        }
      `}</style>
    </Fragment>
  );
};

export default HeroImage;