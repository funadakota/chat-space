## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail_id|string|null: fales, unique: true|

### Association
- has_many :groups, through: groups_users
- has_many :messages
- has_many :groups_users

### Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|

### Association
has_many :groups_users
has_many :users, through: groups_users
has_many :messages

## Messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false, foreign_key:true|
|group_id|integer|null:false, foreign_key: true|
|text|text||
|image|string||

### Association
belongs_to :group
belongs_to :user

### groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|

### Association
belongs_to :group
belongs_to :user
