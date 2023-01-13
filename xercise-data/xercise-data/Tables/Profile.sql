CREATE TABLE [dbo].[Profile]
(
	[ProfileId] INT NOT NULL, 
    CONSTRAINT [PK_ProfileId] PRIMARY KEY CLUSTERED ([ProfileId]),
    [UserId] INT NOT NULL,
    CONSTRAINT [FK_Profile_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[User]([UserId]),
    [Weight] INT NULL, 
    [Height] DECIMAL(5, 2) NULL, 
    [Sex] INT NULL, 
    [Age] INT NULL,
    [CreatedDate] DATETIME2 DEFAULT GETDATE() NOT NULL, 
    [UpdatedDate] DATETIME2 NULL
)
