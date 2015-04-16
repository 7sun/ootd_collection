class User < ActiveRecord::Base
  include ActiveModel::SecurePassword
  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :password_confirmation, presence: true
  validates :company, presence: true

  def fullname
    "#{first_name} #{last_name}"
  end

  def is_admin?
    self.admin == true
  end

end
