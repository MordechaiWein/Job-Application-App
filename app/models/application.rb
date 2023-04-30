class Application < ApplicationRecord
    belongs_to :user
    belongs_to :job

    validates :first_name, :last_name, :age, :work_experience, :phone_number, :email_address, presence: true
    validates :work_experience, length: {maximum: 250}
    validates :phone_number, format: { with: /\A(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}\z/ }
end


