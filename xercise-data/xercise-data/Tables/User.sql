CREATE TABLE [dbo].[User]
(
	[UserId] INT NOT NULL, 
    CONSTRAINT [PK_UserId] PRIMARY KEY CLUSTERED ([UserId]),
    [ProfileId] INT NOT NULL,
    CONSTRAINT [FK_User_Profile] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([UserId]),
    [Email] VARCHAR(50) NOT NULL, 
    [Password] VARCHAR(50) NOT NULL, 
    [Firstname] VARCHAR(50) NOT NULL, 
    [Lastname] VARCHAR(50) NOT NULL,
    [CreatedDate] DATETIME2 NOT NULL DEFAULT GETDATE(),
    [UpdatedDate] DATETIME2 NULL
)
