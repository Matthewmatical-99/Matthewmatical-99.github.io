import React, { useEffect } from 'react';
import * as R from 'ramda';

import { fixedScript } from './utils';

const InstaPost = ({ postId, captioned }) => {
  useEffect(() => {
    if (!!R.path(['instgrm', 'Embeds'], window)) {
      window.instgrm.Embeds.process();
    } else {
      fixedScript();
    }
  }, []);

  return (
    <React.Fragment>
      <div>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned={captioned}
          data-instgrm-permalink={`https://www.instagram.com/p/${postId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: "0",
            // width: "99.375%",
            // width: "-webkit-calc(100% - 2px)",
            width: "calc(100% - 2px)"
          }}
        >
          <div style={{ padding: "16px", height: "420px" }} />
        </blockquote>
      </div>
    </React.Fragment>
  );
};
export default InstaPost;
