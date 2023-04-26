class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_errors
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    #signup
    def create
        user = User.create!(strong_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    #me
    def show
        user = User.find(session[:user_id])
        render json: user
    end

 
    private

    def strong_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :admin)
    end

    def render_errors(instance)
        render json: {errors: instance.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found
        render json: {error: "Not Authorized"}, status: :unauthorized
    end

end
