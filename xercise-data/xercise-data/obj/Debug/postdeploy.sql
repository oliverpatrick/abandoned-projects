/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
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
