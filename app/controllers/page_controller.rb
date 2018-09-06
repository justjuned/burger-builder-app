class PageController < ApplicationController

	def index
		render component: 'App', tag: 'div', class: 'root'
	end
end
