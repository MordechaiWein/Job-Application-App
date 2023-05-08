class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_user_errors
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    def create
        user = User.create!(strong_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        user = User.find(session[:user_id])
        render json: user, status: :created
    end
    
    private
    
    def strong_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

    def render_user_errors(instance)
        render json: {errors: instance.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found
        render json: { error: "Not Authorized" }, status: :unauthorized
    end

end
