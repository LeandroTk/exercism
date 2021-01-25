defmodule RnaTranscription do
  def to_rna(dna) do
    Enum.map(dna, &transcribe_nucleotide/1)
  end

  def transcribe_nucleotide(nucleotide) do
    %{
      71 => 67,
      67 => 71,
      84 => 65,
      65 => 85
    }[nucleotide]
  end
end
