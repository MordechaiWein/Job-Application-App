class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        user = User.create!(strong_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update!(strong_params)
        render json: user
    end
    
    def show
        render json: @user, include: ['applications', 'applications.job'], status: :created
    end
    
    private
    
    def strong_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :admin)
    end

end