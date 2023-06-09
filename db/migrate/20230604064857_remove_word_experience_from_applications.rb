class RemoveWordExperienceFromApplications < ActiveRecord::Migration[6.1]
  def change
    remove_column :applications, :word_experience
  end
end
