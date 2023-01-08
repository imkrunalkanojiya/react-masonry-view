import React from 'react';

var styles = {"test":"_styles-module__test__3ybTi","masonry_container":"_styles-module__masonry_container__1yuSs","m_card":"_styles-module__m_card__2f9Hg","m_card_img":"_styles-module__m_card_img__3XE8u","m_card_single_img":"_styles-module__m_card_single_img__3Gy7V"};

const MasonryView = ({
  imgDetails
}) => {
  return /*#__PURE__*/React.createElement("div", {
    id: styles.masonry_container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.m_card
  }, imgDetails.map(data => {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.m_card_img,
      key: data.id
    }, /*#__PURE__*/React.createElement("img", {
      className: styles.m_card_single_img,
      src: data.imgUrl,
      alt: "card-img"
    }));
  })));
};

export { MasonryView };
//# sourceMappingURL=index.modern.js.map
