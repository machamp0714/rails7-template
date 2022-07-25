class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title, required: true
      t.string :description

      t.timestamps
    end
  end
end
