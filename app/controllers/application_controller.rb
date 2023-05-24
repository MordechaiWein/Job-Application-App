class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_errors
  wrap_parameters format: []
  before_action :authorize

  private
  
  def authorize
    @user = User.find_by(id: session[:user_id])
    return render json: { error: "Not authorized" }, status: :unauthorized unless @user
  end
  
  def render_errors(instance)
    render json: {errors: instance.record.errors.full_messages }, status: :unprocessable_entity
  end

end
