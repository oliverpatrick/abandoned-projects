PRINT 'Populating Mock Data to Table [dbo].[User]'

MERGE INTO [dbo].[User] AS t
USING (
	VALUES
		(1, 1, 'user01@gmail.com', 'test01', 'Joe', 'Bloggs'),
		(2, 2, 'user02@gmail.com', 'test01', 'Jane', 'Doe'),
		(3, 3, 'user03@gmail.com', 'test01', 'John', 'Doe'),
		(4, 4, 'user04@gmail.com', 'test01', 'Joanne', 'Bloggs')
	) s (UserId, ProfileId, Email, Password, Firstname, Lastname)
	ON t.UserId = s.UserId AND t.ProfileId = s.ProfileId AND t.Email = s.Email AND t.Password = s.Password AND t.Firstname = s.Firstname AND t.Lastname = s.Lastname

	WHEN MATCHED AND (s.Email <> t.Email OR s.Password <> t.Password OR s.Firstname <> t.Firstname OR s.Lastname <> t.Lastname)
	THEN 
		UPDATE
			SET Email = s.Email,
				Password = s.Password,
				Firstname = s.Firstname,
				Lastname = s.Lastname,
				UpdatedDate = GETDATE()

	WHEN NOT MATCHED BY TARGET
	THEN
		INSERT
		(	
			UserId, 
			ProfileId, 
			Email, 
			Password, 
			Firstname, 
			Lastname
		)
		VALUES
		(
			UserId, 
			ProfileId, 
			Email, 
			Password, 
			Firstname, 
			Lastname
		);

GO