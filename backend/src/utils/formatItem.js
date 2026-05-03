function formatItem(row) {
  return {
    id: row.item_id,
    title: row.item_name,
    description: row.item_desc,
    timeframe: row.timeframe,
    location: row.loc_content,
    image: row.img_url,
    img_url: row.img_url,
    user_name: row.user_name,
    pfp_url: row.pfp_url,
    approval_status: row.approval_status,
    status: row.approval_status
  };
};

module.exports = formatItem;