"""
Tests for AI-Generated Feature: Create a sample file
"""
import pytest
from ai_generated_feature import create_a_sample_file


def test_create_a_sample_file_exists():
    """Test that the function exists and is callable."""
    assert callable(create_a_sample_file)


def test_create_a_sample_file_returns_dict():
    """Test that the function returns expected format."""
    result = create_a_sample_file()
    assert isinstance(result, dict)
    assert "status" in result


def test_create_a_sample_file_success():
    """Test successful execution."""
    result = create_a_sample_file()
    assert result["status"] == "success"


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
