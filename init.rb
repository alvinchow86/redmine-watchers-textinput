require 'redmine'
require_dependency 'watchers_textinput/hooks'

Redmine::Plugin.register :watchers_textinput do
  name 'Watchers Textinput plugin'
  author 'Alvin Chow'
  description 'Redmine plugin to convert watchers checkboxes to more compact autocomplete text field'
  version '0.1.0'
  url 'http://example.com/path/to/plugin'
  author_url 'http://example.com/about'
end
