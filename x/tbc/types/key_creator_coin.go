package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CreatorCoinKeyPrefix is the prefix to retrieve all CreatorCoin
	CreatorCoinKeyPrefix = "CreatorCoin/value/"
)

// CreatorCoinKey returns the store key to retrieve a CreatorCoin from the index fields
func CreatorCoinKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
