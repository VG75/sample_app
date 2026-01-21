module SessionsHelper

  def log_in(user)
    session[:user_id] = user.id
  end

  # app/helpers/sessions_helper.rb
def logged_in?
  !current_user.nil?  # Correct: calls the method
end

def current_user
  if session[:user_id]
    @current_user ||= User.find_by(id: session[:user_id])
  end
end

  def log_out
    reset_session
    @current_user = nil
  end
end
