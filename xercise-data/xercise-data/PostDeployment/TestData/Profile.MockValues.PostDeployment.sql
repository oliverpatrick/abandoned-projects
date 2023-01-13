PRINT 'Populating Mock Data to Table [dbo].[Profile]'

MERGE INTO [dbo].[Profile] AS t
USING (
	VALUES
		(1, 1, 65, 5.11, 1, 23),
		(2, 2, 70, 5.5, 2, 30),
		(3, 3, 80, 5.9, 1, 19),
		(4, 4, 72, 5.1, 2, 28)
	) s (ProfileId, UserId, Weight, Height, Sex, Age)
	ON t.ProfileId = s.ProfileId AND t.UserId = s.UserId AND t.Weight = s.Weight AND t.Sex = s.Sex AND t.Age = s.Age

	WHEN MATCHED AND (s.Weight <> t.Weight OR s.Height <> t.Height OR s.Sex <> t.Sex OR s.Age <> t.Age)
	THEN 
		UPDATE
			SET Weight = s.Weight,
				Height = s.Height,
				Sex = s.Sex,
				Age = s.Age,
				UpdatedDate = GETDATE()

	WHEN NOT MATCHED BY TARGET
	THEN
		INSERT
		(	
			ProfileId, 
			UserId, 
			Weight, 
			Height, 
			Sex, 
			Age
		)
		VALUES
		(
			ProfileId, 
			UserId, 
			Weight, 
			Height, 
			Sex, 
			Age
		);

GO