class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.text :track_attributes
      t.timestamps null: false
    end
  end
end
