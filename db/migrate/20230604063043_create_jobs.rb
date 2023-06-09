class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :name
      t.string :job_description
      t.string :pay

      t.timestamps
    end
  end
end
