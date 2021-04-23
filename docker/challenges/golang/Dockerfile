FROM golang:alpine AS builder
WORKDIR $GOPATH/thiagojsimaome
COPY app.go .
RUN go mod init app.go
RUN go build -o /go/app

FROM scratch
COPY --from=builder /go/app /go/app
CMD ["./go/app"]