import React from "react";
import styled from 'styled-components';

const ContentBrands = styled.div`
  overflow-x: auto;
`;

const ContentInnerBrands = styled.div`
  min-width: 1100px;
`;

export function RenderBrands() {
  return <ContentBrands className="content-brands">
    <ContentInnerBrands className="inner-content">
      <div className="brand"><img src="/static/img/aura.jpg" /></div>
      <div className="brand"><img src="/static/img/broadspectrum.jpg" /></div>
      <div className="brand"><img src="/static/img/epiroc.jpg" /></div>
      <div className="brand"><img src="/static/img/miningtag.jpg" /></div>
      <div className="brand"><img src="/static/img/tricomin.brand.png" /></div>
      <div className="brand"><img src="/static/img/reinike.brand.jpg" /></div>
      <div className="brand"><img src="/static/img/drager.brand.jpg" /></div>
      <div className="brand"><img src="/static/img/interexport.grand.jpg" /></div>
      <div className="brand"><img src="/static/img/santaelvira.brand.png" /></div>
      <div className="brand"><img src="/static/img/santaveatris.brand.jpg" /></div>
    </ContentInnerBrands>
  </ContentBrands>;
}
