json.links @links do |link|
  json.(link, :id, :title, :url)
  json.keywords link.keywords do |keyword|
    json.name keyword.name
  end
  json.keyword_list link.keywords.map(&:name).join(', ')
end