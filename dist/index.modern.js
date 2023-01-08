import React from 'react';

var styles = {"test":"_3ybTi","masonry_container":"_1yuSs","m_card":"_2f9Hg","m_card_img":"_3XE8u","m_card_single_img":"_3Gy7V"};

var MasonryView = function MasonryView(_ref) {
  var imgDetails = _ref.imgDetails;
  return /*#__PURE__*/React.createElement("div", {
    id: styles.masonry_container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.m_card
  }, imgDetails.map(function (data) {
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
