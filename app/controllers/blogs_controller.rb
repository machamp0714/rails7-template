class BlogsController < ApplicationController
  protect_from_forgery with: :null_session

  def new; end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render json: @blog, status: :ok
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :description)
  end
end
