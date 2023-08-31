CREATE TABLE "koalas_info" (
	"id" SERIAL PRIMARY KEY,
	"Name" VARCHAR (250) NOT NULL,
	"Age" INTEGER NOT NULL,
	"Gender" VARCHAR (1) NOT NULL,
    "Transfer Status" BOOLEAN DEFAULT FALSE,
    "Notes" VARCHAR (250) NOT NULL
);

INSERT INTO "koalas_info" ("Name","Age","Gender","Transfer Status", "Notes")
VALUES ('Bramble', 10, 'M', 'Yes', 'A burly lil guy'),
('Clover',8 , 'F', 'No', 'the luckiest little clover')
