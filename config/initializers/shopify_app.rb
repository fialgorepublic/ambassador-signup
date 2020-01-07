ShopifyApp.configure do |config|
  config.application_name = "POP UP Saint L Beau"
  # config.api_key = "adf65d5dca67061cffad7d8c4a9f9532"
  # config.secret = "743c55dc05deda73900466e0b2d47684"
  config.api_key = "cc28616746f59726098303b177024d3b"
  config.secret = "267985dd75678467d39a69a8cdb89746"
  config.scope = "read_orders, read_products, write_script_tags"
  config.embedded_app = true
  config.scripttags = [
  {event:'onload', src: 'https://popup.saintlbeau.com/custom.js'}
  ]
end
